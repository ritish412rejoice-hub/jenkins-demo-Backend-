export interface Task {
  id: string;
  title: string;
  category: 'Frontend' | 'Backend' | 'CI/CD' | 'Database' | 'DevOps';
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
  createdAt: string;
}

// In-memory data store initialized with starter tasks
let tasks: Task[] = [
  {
    id: 'task-1',
    title: 'Initialize React Vite frontend with custom modern theme',
    category: 'Frontend',
    priority: 'high',
    completed: true,
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
  {
    id: 'task-2',
    title: 'Implement Next.js App Router API endpoints for CRUD',
    category: 'Backend',
    priority: 'high',
    completed: true,
    createdAt: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: 'task-3',
    title: 'Configure cross-origin resource sharing & proxy routing',
    category: 'DevOps',
    priority: 'medium',
    completed: true,
    createdAt: new Date(Date.now() - 1800000).toISOString(),
  },
  {
    id: 'task-4',
    title: 'Connect Jenkins CI/CD automation pipeline for auto-builds',
    category: 'CI/CD',
    priority: 'high',
    completed: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'task-5',
    title: 'Deploy containerized services to production cluster',
    category: 'DevOps',
    priority: 'medium',
    completed: false,
    createdAt: new Date().toISOString(),
  },
];

export function getTasks(): Task[] {
  return [...tasks];
}

export function addTask(data: {
  title: string;
  category: Task['category'];
  priority: Task['priority'];
}): Task {
  const newTask: Task = {
    id: `task-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    title: data.title,
    category: data.category || 'Frontend',
    priority: data.priority || 'medium',
    completed: false,
    createdAt: new Date().toISOString(),
  };
  tasks.unshift(newTask);
  return newTask;
}

export function updateTask(id: string, updates: Partial<Pick<Task, 'title' | 'completed' | 'priority' | 'category'>>): Task | null {
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return null;

  tasks[index] = {
    ...tasks[index],
    ...updates,
  };
  return tasks[index];
}

export function deleteTask(id: string): boolean {
  const initialLength = tasks.length;
  tasks = tasks.filter((t) => t.id !== id);
  return tasks.length < initialLength;
}
