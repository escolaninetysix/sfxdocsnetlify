import React from 'react'
import { createRoot } from 'react-dom/client';
import AppFull from './App'

const container = document.querySelector("div[id^='purchase-app'");
const root = createRoot(container);
const appType = container.id.includes('full') ? 'full' : 'compact';
root.render(<AppFull appType={appType} />);
