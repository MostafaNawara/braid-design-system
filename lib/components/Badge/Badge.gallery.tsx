import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Badge } from '../';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Positive Badge',
    background: 'card',
    Example: () => <Badge tone="positive">Positive</Badge>,
  },
  {
    label: 'Strong Positive Badge',
    Example: () => (
      <Badge tone="positive" weight="strong">
        Positive
      </Badge>
    ),
  },
  {
    label: 'Critical Badge',
    background: 'card',
    Example: () => <Badge tone="critical">Critical</Badge>,
  },
  {
    label: 'Strong Critical Badge',
    Example: () => (
      <Badge tone="critical" weight="strong">
        Critical
      </Badge>
    ),
  },
  {
    label: 'Caution Badge',
    background: 'card',
    Example: () => <Badge tone="caution">Caution</Badge>,
  },
  {
    label: 'Strong Caution Badge',
    Example: () => (
      <Badge tone="caution" weight="strong">
        Caution
      </Badge>
    ),
  },
  {
    label: 'Info Badge',
    background: 'card',
    Example: () => <Badge tone="info">Info</Badge>,
  },
  {
    label: 'Strong Info Badge',
    Example: () => (
      <Badge tone="info" weight="strong">
        Info
      </Badge>
    ),
  },
  {
    label: 'Promote Badge',
    background: 'card',
    Example: () => <Badge tone="promote">Promote</Badge>,
  },
  {
    label: 'Strong Promote Badge',
    Example: () => (
      <Badge tone="promote" weight="strong">
        Promote
      </Badge>
    ),
  },
  {
    label: 'Neutral Badge',
    background: 'card',
    Example: () => <Badge tone="neutral">Neutral</Badge>,
  },
  {
    label: 'Strong Neutral Badge',
    Example: () => (
      <Badge tone="neutral" weight="strong">
        Neutral
      </Badge>
    ),
  },
];
