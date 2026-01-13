"use client"

import { DynastySelection } from "./dynasty-selection"

interface TitleScreenProps {
  onStart: () => void
  onSelectDynasty: (dynastyId: string) => void
}

export function TitleScreen({ onStart, onSelectDynasty }: TitleScreenProps) {
  return <DynastySelection onSelectDynasty={onSelectDynasty} />
}
