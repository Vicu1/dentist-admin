'use client';
import { createContext } from 'react';

export interface ContextCustomActionsI<T> {
    item: T;
    handleRefresh: (page?: number) => void;
    isContext?: boolean;
    index?: number
}

export const ContextCustomActions = createContext<ContextCustomActionsI<any>>({
  item: null,
  handleRefresh: () => {},
  isContext: false,
});
