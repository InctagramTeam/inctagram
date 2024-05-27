import { Ref, SVGProps, forwardRef, memo } from 'react'

const KeyboardArrowRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox={'0 0 16 16'}
    fill={'none'}
    xmlns={'http://www.w3.org/2000/svg'}
    ref={ref}
    {...props}
  >
    <g clip-path="url(#clip0_1787_10298)">
      <path
        d="M6.66662 12.6665C6.51085 12.6669 6.35989 12.6126 6.23995 12.5132C6.17245 12.4572 6.11665 12.3885 6.07574 12.3109C6.03484 12.2334 6.00965 12.1485 6.00159 12.0612C5.99354 11.9739 6.0028 11.8858 6.02883 11.8021C6.05486 11.7184 6.09715 11.6406 6.15329 11.5732L9.13995 7.99988L6.25995 4.41988C6.20458 4.35169 6.16322 4.27322 6.13827 4.189C6.11331 4.10477 6.10525 4.01644 6.11454 3.92909C6.12384 3.84174 6.1503 3.75708 6.19242 3.67999C6.23453 3.6029 6.29147 3.53489 6.35995 3.47988C6.42893 3.41919 6.50971 3.37341 6.59722 3.34542C6.68472 3.31742 6.77707 3.30782 6.86847 3.31721C6.95986 3.3266 7.04833 3.35478 7.12832 3.39998C7.20831 3.44518 7.27809 3.50643 7.33329 3.57988L10.5533 7.57988C10.6513 7.69917 10.7049 7.8488 10.7049 8.00321C10.7049 8.15763 10.6513 8.30726 10.5533 8.42655L7.21995 12.4265C7.15307 12.5072 7.06812 12.571 6.97198 12.6127C6.87584 12.6544 6.77122 12.6728 6.66662 12.6665Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_1787_10298">
        <rect width="16" height="16" fill={'currentColor'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(KeyboardArrowRight)
const Memo = memo(ForwardRef)

export default Memo
