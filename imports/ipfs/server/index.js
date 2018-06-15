import IPFS from 'ipfs';
import fs from 'fs';
import { Writable } from 'stream';

const ipfs = new IPFS({ repo: String(Math.random() + Date.now()) });

Meteor.methods({

  

  // Add a file to IPFS and return a promise containing
  // an error or the file object
  'ipfs.addFile'({ path, content }) {
    if (!path || !content) {
      throw new Meteor.Error('Error', 'Malformed request');
    }
    ipfs.once('ready', () => console.log('IPFS node is ready'));

    content = Buffer.from(content);

    return new Promise((resolve, reject) => {
      ipfs.files.add({ path, content }, (err, files) => {
        if (err) {
          reject(err);
        }

        resolve(files[0]);
      });
    });
  },

  // Attempt to get a file from IPFS for a given hash.
  // Return a promise containing an error or the file data
  'ipfs.getFile'(hash) {
    if (!hash || typeof hash !== 'string') {
      throw new Meteor.Error('Error', 'No IPFS hash provided');
    }

    let blob = '';

    // Create a new writeable stream that concats the
    // data coming from IPFS
    const outStream = new Writable({
      write(chunk, encoding, callback) {
        blob = blob + chunk.toString();
        callback();
      }
    });

    return new Promise((resolve, reject) => {

      // stream is a Readable stream in object mode
      ipfs.files.get(hash, (err, stream) => {
        if (err) {
          reject(err);
        }

        stream.on('data', file => {
          file.content.pipe(outStream);
        });

        stream.on('error', () => {
          reject(new Error('Error reading stream from IPFS'));
        });

        stream.on('end', file => {
          resolve(blob);
        });
      });
    });
  }
});

ipfs.on('error', (err) => {
  console.log('IPFS Error:', err);
});
