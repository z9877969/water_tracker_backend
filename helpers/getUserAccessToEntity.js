const userAccessToEntity = async (
  owner,
  model,
  entityId,
  entityName = "Data"
) => {
  try {
    const entity = await model.findById(entityId);
    if (!entity) {
      throw createError(404, `${entityName} was not found`);
    }
    if (String(entity.owner) !== String(owner)) {
      throw createError(403);
    }

    return true;
  } catch (error) {
    throw updateError(400, error);
  }
};

module.exports = userAccessToEntity;
