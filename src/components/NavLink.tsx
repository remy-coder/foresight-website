import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { getUrlFromId } from '../utils/navigation';

import React from 'react';

interface NavLinkProps {
  id: string;
  label: string;
  dropdown?: { id: string; label: string }[];
  mobile?: boolean;
  currentPage: string;
  onClick: (id: string) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ id, label, dropdown, mobile, currentPage, onClick }) => {
  if (mobile && dropdown) {
    return (
      <div className="py-2">
        <button
          onClick={() => onClick(id)}
          className={`w-full text-left py-4 px-6 text-lg font-display font-semibold transition-colors ${currentPage === id ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
        >
          {label}
        </button>
        <AnimatePresence>
          {currentPage === id && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-gray-50 overflow-hidden"
            >
              {dropdown.map((subItem, idx) => (
                <button
                  key={idx}
                  onClick={() => onClick(subItem.id)}
                  className="w-full text-left py-4 px-10 text-base font-display font-medium text-gray-500 hover:text-primary transition-colors"
                >
                  {subItem.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  if (id === 'donate') {
    return (
      <a
        href="/donate"
        onClick={(e) => {
          e.preventDefault();
          onClick(id);
        }}
        className={`
          ${mobile ? 'block w-full text-left py-4 px-6 text-lg font-display font-semibold' : 'px-4 py-2 font-display font-semibold transition-all duration-300 relative group'}
          ${currentPage === id ? 'text-primary' : 'text-gray-600 hover:text-primary'}
          bg-accent text-white rounded-full px-6 py-2.5 hover:bg-accent-dark shadow-md hover:shadow-lg transform hover:-translate-y-0.5 md:ml-2
          ${mobile ? 'text-center mx-6 my-6 w-auto block' : ''}
        `}
      >
        {label}
      </a>
    );
  }

  return (
    <div className="relative group">
      <button
        onClick={() => {
          if (!dropdown || mobile) {
            onClick(id);
          }
        }}
        className={`
          ${mobile ? 'block w-full text-left py-4 px-6 text-lg font-display font-semibold' : 'px-4 py-2 font-display font-semibold transition-all duration-300 relative group flex items-center gap-1'}
          ${currentPage === id ? 'text-primary' : 'text-gray-600 hover:text-primary'}
        `}
      >
        <a 
          href={getUrlFromId(id)} 
          onClick={(e) => e.preventDefault()}
          className="contents"
        >
          {label}
        </a>
        {!mobile && dropdown && (
          <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />
        )}
        {!mobile && currentPage === id && (
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary" />
        )}
      </button>

      {dropdown && !mobile && (
        <div className="absolute top-full left-0 w-64 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-3">
            {dropdown.map((subItem) => (
              <button
                key={subItem.id}
                onClick={() => onClick(subItem.id)}
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-600 hover:text-primary font-display font-bold text-sm transition-colors flex items-center justify-between group/item"
              >
                <a 
                  href={getUrlFromId(subItem.id)} 
                  onClick={(e) => e.preventDefault()}
                  className="contents"
                >
                  {subItem.label}
                </a>
                <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
              </button>
            ))}
          </div>
        </div>
      )}

      {dropdown && mobile && (
        <div className="pl-6 space-y-1">
          {dropdown.map((subItem) => (
            <button
              key={subItem.id}
              onClick={() => onClick(subItem.id)}
              className="block w-full text-left py-3 px-6 text-base text-gray-500 font-display font-medium hover:text-primary"
            >
              <a 
                href={getUrlFromId(subItem.id)} 
                onClick={(e) => e.preventDefault()}
                className="contents"
              >
                {subItem.label}
              </a>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
export default NavLink;
