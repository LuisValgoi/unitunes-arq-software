const Media = require('../models/Media');
const MovimentationService = require('./MovimentationService');
const LibraryService = require('./LibraryService');
const BaseService = require('./BaseService')(Media);

BaseService.getAllReleased = async function () {
  try {
    let query = { 'isAvailable': true };

    return await Media.find(query).select(['-content', '-image']);
  } catch (e) {
    console.log("Reported Error:", e);
  }
};

BaseService.getById = async function (id) {
  try {
    return await Media.findById(id).select(['-content', '-image'])
  } catch (e) {
    console.log("Reported Error:", e);
  }
};

BaseService.getContent = async function (id) {
  try {
    return await Media.findById(id).select(['content', 'image']);
  } catch (e) {
    console.log("Reported Error:", e);
  }
};

BaseService.release = async function (id) {
  try {
    let fieldToUpdated = { 'isAvailable': true };
    let payload = { $set: fieldToUpdated };

    return await Media.findByIdAndUpdate(id, payload, { new: true, useFindAndModify: false });
  } catch (e) {
    console.log("Reported Error:", e);
  }
};

BaseService.download = async function (id) {
  try {
    return await Media.findById(id).select('content');
  } catch (e) {
    console.log("Reported Error:", e);
  }
};

BaseService.buy = async function (movimentation) {
  try {
    let result = await MovimentationService.insert(movimentation);

    for (let item of movimentation['medias']) {
      let libraryPayload = { 
        'user': movimentation['buyer'],
        'media': item 
      };
      await LibraryService.insert(libraryPayload);
    }

    return result;
  } catch (e) {
    console.log("Reported Error:", e);
  }
};

module.exports = BaseService;