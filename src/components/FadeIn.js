import React from 'react';
import {Spring}  from 'react-spring/renderprops';

export function FadeIn({component, props}){
    return (
      <Spring
          {...props}
          >
              {
                  props => (
                      <div style={props}>
                        {component}
                      </div>
                  )
              }
          </Spring>
    );
}