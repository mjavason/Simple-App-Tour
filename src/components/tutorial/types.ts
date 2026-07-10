export type Globals =
  '-moz-initial' | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';
export type FlexDirection =
  Globals | 'column' | 'column-reverse' | 'row' | 'row-reverse';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type Placement =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left';

export type HighlightAction = 'click' | 'hover' | 'next' | 'none';

export interface TutorialStep {
  title?: string;
  content: string;
  textPlacement?: Placement;
  characterPosition?: {
    icon: string;
    placement: Placement;
    width?: number;
  };
  pointerPosition?: {
    icon: string;
    placement: Placement;
    width?: number;
  };
  highlight?: {
    elementId: string;
    action: HighlightAction;
  };
  actionButtonText?: string;
}
