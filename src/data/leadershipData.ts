export interface LeadershipRole {
  role: string;
  timeline: string;
  isLatest?: boolean;
  description?: string;
}

export interface LeadershipOrg {
  id: string;
  name: string;
  totalTenure: string;
  location: string;
  logo: string;
  description?: string;
  roles: LeadershipRole[];
}

export const leadershipOrganizations: LeadershipOrg[] = [
  {
    id: "bauet-welfare-club",
    name: "BAUET Welfare Club",
    totalTenure: "4 yrs",
    location: "Nator, Rajshahi, Bangladesh",
    logo: "/images/bauet-welfare-club.png",
    description: "Student-run social welfare and leadership initiative dedicated to community upliftment, charity drives, and institutional representation.",
    roles: [
      {
        role: "President",
        timeline: "Aug 2025 - Feb 2026 · 7 mos",
        isLatest: true,
        description: "Led executive committee operations, oversaw major charity drives, directed student welfare programs, and represented the organization at university administration level."
      },
      {
        role: "General Secretary",
        timeline: "Oct 2024 - Aug 2025 · 11 mos",
        description: "Coordinated inter-departmental welfare events, managed secretarial records, directed volunteer teams, and streamlined club communications."
      },
      {
        role: "Deputy IT Secretary",
        timeline: "Dec 2022 - Sep 2024 · 1 yr 10 mos",
        description: "Managed digital communications, designed event media, coordinated online outreach pipelines, and maintained club technology assets."
      },
      {
        role: "General Member",
        timeline: "Mar 2022 - Dec 2022 · 10 mos",
        description: "Actively contributed to campus social welfare campaigns, disaster relief collection drives, and student assistance volunteer drives."
      }
    ]
  },
  {
    id: "bauet-computer-society",
    name: "BAUET Computer Society",
    totalTenure: "3 yrs 6 mos",
    location: "Nator, Rajshahi, Bangladesh",
    logo: "/images/bauet-computer-society.png",
    description: "The flagship departmental computing community at BAUET fostering competitive programming, hackathons, and software engineering development.",
    roles: [
      {
        role: "Joint General Secretary-2",
        timeline: "Aug 2025 - Feb 2026 · 7 mos",
        isLatest: true,
        description: "Steered campus-wide tech festivals and competitive programming contests; supervised executive team operations and external partnerships."
      },
      {
        role: "Joint General Secretary-1",
        timeline: "Apr 2025 - Aug 2025 · 5 mos",
        description: "Organized technical workshops, algorithmic problem-solving bootcamps, and coordinated project exhibitions for undergraduate engineers."
      },
      {
        role: "Joint General Secretary",
        timeline: "Nov 2024 - Apr 2025 · 6 mos",
        description: "Assisted in scheduling annual tech events, mentoring junior members in coding clubs, and managing event logistics."
      },
      {
        role: "Secretary of Logistic",
        timeline: "Jun 2023 - Nov 2024 · 1 yr 6 mos",
        description: "Directed procurement, stage setup, laboratory hardware allocations, and venue preparations for all major departmental competitions."
      },
      {
        role: "Deputy Logistic Secretary",
        timeline: "Dec 2022 - Jun 2023 · 7 mos",
        description: "Supported event management, vendor coordination, equipment setup, and volunteer supervision during university-wide ICT fests."
      },
      {
        role: "General Member",
        timeline: "Sep 2022 - Dec 2022 · 4 mos",
        description: "Participated in algorithmic problem-solving contests, software development meetups, and student tech workshops."
      }
    ]
  }
];
