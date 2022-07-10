//使用 React + IntersectionObserver 实现图片懒加载
//图片懒加载原理

import React, { FC, memo, useEffect, useRef } from 'react'

// CSS IN JS 的样式
import { Container, ImageWrapper, Image } from './style'
// 用到的图片，类型是 string[]
import { lazyloadImages } from './utils'

export const IntersectionObserverLazyload: FC<{}> = memo(() => {
  const observerRef = useRef(new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { target, intersectionRatio } = entry
        
      // target 为具体的 dom
      // intersectionRatio 范围为 0 ~ 1, 0 为完全不可见， 1 为完全可见
      // 因此只需判断当 intersectionRatio 大于 0 即可
      if (intersectionRatio > 0) {
        const _target = target as HTMLImageElement
        _target.src = _target.dataset['src'] ?? ''

        _target.onload = () => {
          _target.style.opacity = '1'
        }

        observerRef.current.unobserve(_target)
      }
    })
  }))

  useEffect(() => {
    Array
      .from(document.getElementsByTagName('img'))
      .forEach((img) => observerRef.current.observe(img))

    return () => {
      observerRef.current.disconnect()
    }
  }, [])

  return (
    <Container>
      {lazyloadImages.map((image, index) => (
        <ImageWrapper key={index}>
          <Image
            src={undefined}
            data-src={image}
            alt={`${index}`}
            style={{ opacity: '0', transition: '.3s' }}
          />
        </ImageWrapper>
      ))}
    </Container>
  )
})
