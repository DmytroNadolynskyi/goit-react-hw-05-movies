import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderWrap>
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderWrap>
  );
}