mport AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Connect routes to the appropriate handler
 * @param {Express} app The Express application.
 * @throws {Error} Throws an error if the file cannot be loaded
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
