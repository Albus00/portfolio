import PocketBase, { type RecordModel } from 'pocketbase';
import { PB_URL } from '$env/static/private';
import type { Project } from '$lib/types';
import { hexToRgb } from '$lib/functions/color';

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
      // images: record.images?.map((fileName: string) => getMediaUrl(record, fileName)) || [],
      image: pb.files.getURL(record, record.images[0]),
      mobileImage: pb.files.getURL(record, record.mobile_image),
      video: record.video ? getMediaUrl(record, record.video) : null,
      stack: record.expand?.stack || [],
      customColor: record.custom_color ? hexToRgb(record.custom_color) : '',
      info: record.info
    }));
  } catch (error) {
    console.error('Error fetching projects from PocketBase:', error);
    return [];
  }
};

export const getProjectById = async (id: string): Promise<Project | null> => {
  try {
    const record = await pb.collection('projects').getOne(id, { expand: 'stack' });

    return {
      id: record.id,
      name: record.name,
      description: { short: record.short_description, long: record.description },
      startDate: record.date,
      technologies: 'technologies' in record ? record.technologies : [],
      repositoryUrl: record.repository_url,
      demoUrl: record.demo_url,
      image: pb.files.getURL(record, record.images[0]),
      mobileImage: pb.files.getURL(record, record.mobile_image),
      video: record.video ? getMediaUrl(record, record.video) : null,
      stack: record.expand?.stack || [],
      customColor: record.custom_color ? hexToRgb(record.custom_color) : '',
      info: record.info
    };
  } catch (error) {
    console.error(`Error fetching project with id ${id} from PocketBase:`, error);
    return null;
  }
};

const getMediaUrl = (record: RecordModel, fileName: string) => pb.files.getURL(record, fileName);