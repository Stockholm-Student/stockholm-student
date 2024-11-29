import {
  BikeIcon,
  BookOpenIcon,
  BriefcaseIcon,
  CameraIcon,
  CpuIcon,
  EarthIcon,
  FlaskConicalIcon,
  GamepadIcon,
  HeartIcon,
  MusicIcon,
  PaletteIcon,
  ShoppingCartIcon,
  TreesIcon,
  UtensilsIcon,
  VenetianMaskIcon,
} from 'lucide-react'
import React from 'react'

export interface Category {
  id: number
  name: string
  icon: React.ReactNode
}

export const categories: Category[] = [
  {
    id: 1,
    name: 'Technology',
    icon: <CpuIcon className="mr-2 h-4 w-4" />,
  },
  {
    id: 2,
    name: 'Science',
    icon: <FlaskConicalIcon className="mr-2 h-4 w-4" />,
  },
  {
    id: 3,
    name: 'Food',
    icon: <UtensilsIcon className="mr-2 h-4 w-4" />,
  },
  {
    id: 4,
    name: 'Shopping',
    icon: <ShoppingCartIcon className="mr-2 h-4 w-4" />,
  },
  {
    id: 5,
    name: 'Sports',
    icon: <BikeIcon className="mr-2 h-4 w-4" />,
  },
  {
    id: 6,
    name: 'Music',
    icon: <MusicIcon className="mr-2 h-4 w-4" />,
  },
  {
    id: 7,
    name: 'Party',
    icon: <MusicIcon className="mr-2 h-4 w-4" />,
  },
  {
    id: 8,
    name: 'Study',
    icon: <BookOpenIcon className="mr-2 h-4 w-4" />,
  },
  {
    id: 9,
    name: 'Career',
    icon: <BriefcaseIcon className="mr-2 h-4 w-4" />,
  },
  {
    id: 10,
    name: 'Art',
    icon: <PaletteIcon className="mr-2 h-4 w-4" />,
  },
  {
    id: 11,
    name: 'Gaming',
    icon: <GamepadIcon className="mr-2 h-4 w-4" />,
  },
  {
    id: 12,
    name: 'Languages',
    icon: <EarthIcon className="mr-2 h-4 w-4" />,
  },
  {
    id: 13,
    name: 'Volunteering',
    icon: <HeartIcon className="mr-2 h-4 w-4" />,
  },
  {
    id: 14,
    name: 'Photography',
    icon: <CameraIcon className="mr-2 h-4 w-4" />,
  },
  {
    id: 15,
    name: 'Theater',
    icon: <VenetianMaskIcon className="mr-2 h-4 w-4" />,
  },
  {
    id: 16,
    name: 'Outdoor',
    icon: <TreesIcon className="mr-2 h-4 w-4" />,
  },
]

export default categories
