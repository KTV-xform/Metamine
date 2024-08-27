import React from 'react';
import {memo} from 'react';
import tw from 'twin.macro';

const ContentWrapper = ({containerCss, children, contentCss, style, ...rest}) => {
    return (
        <div style={style} css={[tw`flex relative items-center flex-col`, containerCss]}>
            <div {...rest} css={[tw`w-full max-w-[1140px] px-[15px] md:py-[128px] py-[46px]`, contentCss]}>{children}</div>
        </div>
    );
};

export default memo(ContentWrapper);
