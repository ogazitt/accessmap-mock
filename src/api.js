// Permissions access mock API

// local state for cars access map
const accessMap = [{
  "mycars://cars/get": 7,
  "mycars://cars/post": 7,
  "mycars://cars/_id/get": 7,
  "mycars://cars/_id/put": 7,
  "mycars://cars/_id/delete": 7,
}];

// register routes for cars API
exports.register = (app) => {
  app.get("/api/v1/edge/accessmap", (req, res) => {
    res.status(200).send(accessMap);
  });
  
  app.post("/api/permissions", (req, res) => {
    const permission = req.body;
    const verb = permission && permission.verb;
    if (!verb) {
      res.status(500).send();
      return;
    }

    let key;
    switch (verb) {
      case 'get':
        key = `mycars://cars/get`;
        break;
      case 'post':
        key = `mycars://cars/post`;
        break;
      case 'put':
        key = `mycars://cars/_id/get`;
        break;
      case 'delete':
        key = `mycars://cars/_id/delete`;
        break;
    }
    if (!key) {
      res.status(500).send();
      return;
    }
    let permissionValue = 0;
    if (permission.visible != null) {
      if (permission.visible) {
        permissionValue += 4;
      }
    }
    if (permission.enabled != null) {
      if (permission.enabled) {
        permissionValue += 2;
      }
    }
    accessMap[key] = permissionValue;

    res.status(201).send();
  });
}
