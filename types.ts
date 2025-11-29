import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}