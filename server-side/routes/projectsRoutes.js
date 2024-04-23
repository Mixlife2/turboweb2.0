import { Router } from 'express';
import { ProjectsManager } from '../dao/DBmanager/projectsManager.js';

export const router=Router()

const projectsManager = new ProjectsManager();

// Crear un proyecto
router.post('/', async (req, res) => {
  try {
    const newProject = await projectsManager.create(req.body);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el proyecto' });
  }
});

// Obtener un proyecto por ID
router.get('/:id', async (req, res) => {
  try {
    const project = await projectsManager.getBy({ _id: req.params.id });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el proyecto' });
  }
});

// Obtener todos los proyectos
router.get('/', async (req, res) => {
  try {
    const allProjects = await projectsManager.getAll();
    res.status(200).json(allProjects);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener todos los proyectos' });
  }
});

// Actualizar un proyecto
router.put('/:id', async (req, res) => {
  try {
    const updatedProject = await projectsManager.update({ _id: req.params.id }, req.body);
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el proyecto' });
  }
});

// Eliminar un proyecto
router.delete('/:id', async (req, res) => {
  try {
    await projectsManager.delete({ _id: req.params.id });
    res.status(204).json({ message: 'Proyecto eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el proyecto' });
  }
});

export default router;
