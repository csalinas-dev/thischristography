import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';

// Add UploadCare
CMS.registerMediaLibrary(uploadcare);

// Set Slug
CMS.registerEventListener({
  name: 'preSave',
  handler: ({ entry }) => {
   if (entry.get('slug')) {
     return entry.get('data').set('slug', entry.get('slug'));
   } else {
     // you can use any relevant field/logic for generating the initial slug
     const slug = entry.getIn(['data', 'title'], '').toLowerCase().replace(/[']/g, '').replace(/[.]/g, '-').replace(/[\s]/g, '-')
     return entry.get('data').set('slug', slug);
   }
  },
});