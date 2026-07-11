import CMS from 'decap-cms-app';
import uploadcare from 'decap-cms-media-library-uploadcare';

// Add UploadCare
CMS.registerMediaLibrary(uploadcare);

// Set Slug
CMS.registerEventListener({
  name: 'preSave',
  handler: ({ entry }) => {
    // you can use any relevant field/logic for generating the initial slug
    const slug = entry.getIn(['data', 'title'], '').toLowerCase().replace(/[\s]/g, '-')
    return entry.get('data').set('slug', slug);
  },
});