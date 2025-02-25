import {
  BriefcaseBusinessIcon,
  ClapperboardIcon,
  CpuIcon,
  DnaIcon,
  DramaIcon,
  DumbbellIcon,
  GlobeIcon,
  GraduationCap,
  LeafIcon,
  MusicIcon,
  PaletteIcon,
  PartyPopperIcon,
  UsersIcon,
  UtensilsIcon,
} from 'lucide-react'

import disk from '@/assets/logo/organizations/disk-logo.png'
import esn from '@/assets/logo/organizations/esn-logo.png'
import stst from '@/assets/logo/organizations/stst-logo.png'
import sus from '@/assets/logo/organizations/sus-logo.png'

export type Role =
  | 'admin'
  | 'user'
  | 'organization_owner'
  | 'organization_moderator'
  | 'community_admin'
  | 'community_moderator'
  | 'wiki_moderator'

export const categoriesMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  art: PaletteIcon,
  career: BriefcaseBusinessIcon,
  culture: DramaIcon,
  entertainment: ClapperboardIcon,
  food: UtensilsIcon,
  health: DnaIcon,
  music: MusicIcon,
  nature: LeafIcon,
  party: PartyPopperIcon,
  social: UsersIcon,
  sport: DumbbellIcon,
  technology: CpuIcon,
  travel: GlobeIcon,
  university: GraduationCap,
}

export const organizationsMap: Record<string, JSX.Element> = {
  ESN: <img src={esn} alt="ESN" className="h-8 w-8" />,
  STST: <img src={stst} alt="STST" className="h-8 w-8" />,
  DISK: <img src={disk} alt="DISK" className="h-8 w-8" />,
  SUS: <img src={sus} alt="SUS" className="h-8 w-8" />,
}
