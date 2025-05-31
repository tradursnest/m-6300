
import React from 'react';
import { AdSenseAd } from './AdSenseAd';
import { Card } from '@/components/ui/card';

interface BannerAdProps {
  className?: string;
}

export function BannerAd({ className }: BannerAdProps) {
  return (
    <Card className={`p-4 bg-muted/20 ${className}`}>
      <div className="text-xs text-muted-foreground mb-2 text-center">Advertisement</div>
      <AdSenseAd
        slot="0987654321"
        format="horizontal"
        className="min-h-[90px]"
        style={{ minHeight: '90px' }}
      />
    </Card>
  );
}
