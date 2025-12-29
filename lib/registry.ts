import registry from '@/registry.json';

export interface RegistryItem {
  name: string;
  type: string;
  title?: string;
  description?: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files?: Array<{
    path: string;
    type: string;
    target?: string;
  }>;
}

export function getAllComponents(): RegistryItem[] {
  return registry.items || [];
}

export function getComponent(name: string): RegistryItem | undefined {
  return getAllComponents().find((item) => item.name === name);
}

export function getComponentsByType(type: string): RegistryItem[] {
  return getAllComponents().filter((item) => item.type === type);
}
