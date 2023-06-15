const { users: services } = require("../../services");

const updateUserAvatar = async (req, res, next) => {
  try {
    if (!req.file) {
      throw createError(400, "File is required");
    }

    const updatedAvatarUrl = await services.updateUserAvatar(
      req.user,
      req.file
    );

    res.json(updatedAvatarUrl);
  } catch (error) {
    next(error);
  }
};

// {
//   fieldname: 'avatarUrl',
//   originalname: 'test-cat.jpeg',
//   encoding: '7bit',
//   mimetype: 'image/jpeg',
//   destination: '/home/apleuha/goit/project-office/projects-backend/water_traker_backend/tmp',
//   filename: 'test-cat.jpeg',
//   path: '/home/apleuha/goit/project-office/projects-backend/water_traker_backend/tmp/test-cat.jpeg',
//   size: 3555
// }

module.exports = updateUserAvatar;
