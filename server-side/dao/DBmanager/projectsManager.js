import Project from "../models/Project.js";

export class ProjectsManager {
  async create(project) {
    let newProject = await Project.create(project);
    return newProject.toJSON();
  }

  async getBy(filter) {
    return await Project.findOne(filter).lean();
  }

  async getAll() {
    return await Project.find().lean();
  }

  async update(filter, updates) {
    return await Project.findOneAndUpdate(filter, updates, { new: true }).lean();
  }

  async delete(filter) {
    return await Project.deleteOne(filter);
  }
}
