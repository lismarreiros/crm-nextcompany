{/* completa para qualquer direção  */}

import React from 'react';
import { clsx } from 'clsx';

interface DrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ open, setOpen, children, }) => {
  return (
    <div
      id='dialog-right'
      className="relative z-10"
      aria-labelledby="slide-over"
      role="dialog"
      aria-modal="true"
      onClick={() => setOpen(!open)}
    >
      <div className={clsx('fixed inset-0 bg-gray-200 bg-opacity-25 transition-all',
        {'opacity-100 duration-500 ease-in-out visible': open }, { 'opacity-0 duration-500 ease-in-out invisible': !open } )}>

      </div>
      <div className={clsx({ 'fixed inset-0 overflow-hidden': open })}>
        <div className="absolute inset-0 overflow-hidden">
          <div className={clsx('pointer-events-none fixed max-w-full', 'inset-y-0 right-0')}
          >
            <div
              className={clsx(
                'pointer-events-auto relative w-full h-full transform transition ease-in-out duration-500',
                { 'translate-x-full' : !open },
                { 'translate-x-0' : open }
              )}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
              }}
            >
              <div
                className={clsx(
                  'flex flex-col mt-10 h-[100%] w-[20vw] overflow-y-scroll bg-white shadow-xl rounded-lg'
                )}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
