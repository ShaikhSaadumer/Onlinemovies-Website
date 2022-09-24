const Profile = require("../Model/ProfileModel");
const Show = require("../Model/show");

const likeShowController = async (req, res, next) => {
  try {
    const { data: userId } = req.id;

    const { showId } = req.params;
    const { profileId } = req.query;
    const profile = await Profile.findOne({ _id: profileId });

    const isLiked = profile.likes && profile.likes.includes(showId);
    const isDisLiked = profile.dislikes && profile.dislikes.includes(showId);

    const option = isLiked ? "$pull" : "$addToSet";

    let newProfile = await Profile.findByIdAndUpdate(
      profileId,
      { [option]: { likes: showId } },
      { useFindAndModify: false, returnOriginal: false }
    );

    if (isDisLiked) {
      newProfile = await Profile.findByIdAndUpdate(
        profileId,
        { $pull: { dislikes: showId } },
        { useFindAndModify: false, returnOriginal: false }
      );
    }

    newProfile = await Profile.populate(newProfile, "myList");

    newProfile = await Profile.populate(newProfile, "myList.genre_ids");

    return res.status(200).json({
      newProfile,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

module.exports = likeShowController;
