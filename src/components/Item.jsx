import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const Item = ({product}) => {
  return (
    <motion.div
      className='group relative'
      whileHover={{
        scale: 1.04,
        y: -6,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <Link to={`/products/${product?.id}`}>
      <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-800/50 lg:aspect-none grup-hover:opacity-75 lg:h-80 h-96 border border-gray-700/50'>
        {/* <img src={product?.image} alt={product?.name} className='h-full w-full object-cover object-center lg:h-full lg:w-full' /> */}
        <motion.div
            className="absolute top-0 left-0 w-full bg-red-500/70 z-10"
            initial={{ height: "0%" }}
            whileHover={{ height: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        <motion.img
            src={product?.image}
            alt={product?.name}
            className='h-full w-full object-cover object-center bg-red-600 lg:h-full lg:w-full '
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            
          />
          {/* <motion.img
            src={product?.image}
            alt={product?.name}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            whileHover={{ scale: 1.1 }}
          /> */}
      </div>
      </Link>
      <div className='mt-4 flex justify-between'>
        <div>
            <h3 className='text-sm text-foreground'>
                <Link to={`/products/${product?.id}`}>
                <span aria-hidden="true" className='inset-0'>{product?.name}</span>
                </Link>
            </h3>
        </div>
        <p className='text-sm font-medium text-foreground'>${product?.new_price}</p>
        
      </div>
    </motion.div>
  )
}

export default Item
