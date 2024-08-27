import React from 'react';
import tw, {css} from 'twin.macro';

export const MenuItem = ({isActive, children, activeColor = '#D42F2F', color = 'black', ...rest}) => {
  return (
    <div
      css={[
        css`
          color: ${color};
          &:hover {
            color: ${activeColor};
          }
        `,
        tw`md:text-[12px] text-[10px] px-[8px] py-[10px] transition-all cursor-pointer`,
        isActive && css`color: ${activeColor};`,
      ]}
      {...rest}
    >
      {children}
    </div>
  );
};