// Permissions access mock API

// local state for cars access map
const accessMap = {
  "/cars": {
    verb: {
      GET: {
        visible: true,
        enabled: true
      },
      POST: {
        visible: true,
        enabled: true
      },
      PUT: {
        visible: true,
        enabled: true
      },
      DELETE: {
        visible: true,
        enabled: true
      },
    }
  },
  "/cars/__id": {
    verb: {
      GET: {
        visible: true,
        enabled: true
      },
      POST: {
        visible: true,
        enabled: true
      },
      PUT: {
        visible: true,
        enabled: true
      },
      DELETE: {
        visible: true,
        enabled: true
      },
    }
  }
};

// register routes for cars API
exports.register = (app) => {
  app.post("/api/v1/edge/accessmap", (req, res) => {
    res.status(200).send({ path: accessMap });
  });
  
  app.post("/api/permissions", (req, res) => {
    const permission = req.body;
    const verb = permission && permission.verb;
    if (!verb) {
      res.status(500).send();
      return;
    }

    const path = (verb === 'GET' || verb === 'POST') ? '/cars' : '/cars/__id';
    if (permission.visible != null) {
      accessMap[path].verb[verb].visible = permission.visible;
    }
    if (permission.enabled != null) {
      accessMap[path].verb[verb].enabled = permission.enabled;
    }

    res.status(201).send(accessMap);
  });
}
