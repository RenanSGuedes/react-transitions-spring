import { useSpring, animated } from 'react-spring'
import React from 'react';

export default function App() {
  const props = useSpring({ x:1, from: { x: 0}})
  return (
    <animated.div
      style={{
        transform: props.x
          .interpolate({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
          })
          .interpolate(x => `scale(${x})`)
      }}
    />
  )
}