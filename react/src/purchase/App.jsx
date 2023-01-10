import React from 'react'
import PurchaseWindowFull from './components/PurchaseWindowFull'
import PurchaseWindowCompact from './components/PurchaseWindowCompact'
import { PurchaseProvider } from './contexts/PurchaseContext'
import { ErrorProvider } from '../common/contexts/ErrorContext'

import './styles/purchase.css'
import ErrorBanner from '../common/components/ErrorBanner'

export default function AppFull(props) {
  const {appType} = props;

  const purchaseWindow = appType == 'full' ? <PurchaseWindowFull /> : <PurchaseWindowCompact />

  return (
    <div>
        <PurchaseProvider>
          <ErrorProvider>
            {purchaseWindow}
          </ErrorProvider>
        </PurchaseProvider>
    </div>
  )
}
