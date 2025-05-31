
import React from 'react';
import { AdSenseAd } from './AdSenseAd';
import { Card } from '@/components/ui/card';

export function SidebarAd() {
  return (
    <Card className="p-4 bg-muted/20">
      <div className="text-xs text-muted-foreground mb-2 text-center">Advertisement</div>
      <AdSenseAd
        slot="1234567890"
        format="auto"
        className="min-h-[250px]"
        style={{ minHeight: '250px' }}
      />
    </Card>
  );
}
