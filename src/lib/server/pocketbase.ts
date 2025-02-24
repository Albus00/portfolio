import PocketBase from 'pocketbase';
import { PB_URL } from '$env/static/private';
import type { Project } from '$lib/types';

const pb = new PocketBase(PB_URL);

export const getProjects = async (): Promise<Project[]> => {
  try {
    const records = await pb.collection('projects').getFullList({
      sort: '-date', expand: 'stack'
    });

    return records.map((record) => ({
      id: record.id,
      name: record.name,
      description: { short: record.short_description, long: record.description },
      startDate: record.date,
      technologies: 'technologies' in record ? record.technologies : [],
      repositoryUrl: record.repository_url,
      demoUrl: record.demo_url,
      images: record.images,
      video: record.video,
      stack: record.expand?.stack || [],
      customColor: record.custom_color ? record.custom_color : ''
    }));
  } catch (error) {
    console.error('Error fetching projects from PocketBase:', error);
    return [];
  }
};

export const getProjectById = async (id: string): Promise<Project | null> => {
  try {
    const record = await pb.collection('projects').getOne(id, {
      expand: 'stack'
    });

    console.log('record:', record);

    return {
      id: record.id,
      name: record.name,
      description: { short: record.short_description, long: record.description },
      startDate: record.date,
      technologies: 'technologies' in record ? record.technologies : [],
      repositoryUrl: record.repository_url,
      demoUrl: record.demo_url,
      images: record.images,
      video: record.video,
      stack: record.expand?.stack || [],
      customColor: record.custom_color ? record.custom_color : ''
    };
  } catch (error) {
    console.error(`Error fetching project with id ${id} from PocketBase:`, error);
    return null;
  }
};

