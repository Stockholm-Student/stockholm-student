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

export const categoriesMap: Record<string, JSX.Element> = {
  sport: <DumbbellIcon key="sport" className="h-5 w-5" />,
  party: <PartyPopperIcon key="party" className="h-5 w-5" />,
  culture: <DramaIcon key="culture" className="h-5 w-5" />,
  university: <GraduationCap key="university" className="h-5 w-5" />,
  music: <MusicIcon key="music" className="h-5 w-5" />,
  food: <UtensilsIcon key="food" className="h-5 w-5" />,
  technology: <CpuIcon key="technology" className="h-5 w-5" />,
  health: <DnaIcon key="health" className="h-5 w-5" />,
  nature: <LeafIcon key="nature" className="h-5 w-5" />,
  social: <UsersIcon key="networking" className="h-5 w-5" />,
  career: <BriefcaseBusinessIcon key="career" className="h-5 w-5" />,
  art: <PaletteIcon key="art" className="h-5 w-5" />,
  travel: <GlobeIcon key="travel" className="h-5 w-5" />,
  entertainment: <ClapperboardIcon key="entertainment" className="h-5 w-5" />,
}

export const organizationsMap: Record<string, JSX.Element> = {
  ESN: <img src={esn} alt="ESN" className="h-8 w-8" />,
  STST: <img src={stst} alt="STST" className="h-8 w-8" />,
  DISK: <img src={disk} alt="DISK" className="h-8 w-8" />,
  SUS: <img src={sus} alt="SUS" className="h-8 w-8" />,
}
