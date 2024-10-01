import { Card, Dialog, Grid } from '@mui/material'
import { LoadingContext } from '../../context/Loading'
import { useContext } from 'react'

export function Loading() {
  const { loading } = useContext(LoadingContext)
  return (
    <Dialog open={loading}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Card
            sx={{
              height: 200,
              width: 200,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <svg
              width="700px"
              height="700px"
              style={{ marginTop: '-260px', marginRight: '-250px' }}
            >
              <style>
                {`#edUR0Ytf6yn2 {animation: edUR0Ytf6yn2_c_o 3000ms linear infinite normal forwards}@keyframes edUR0Ytf6yn2_c_o { 0% {opacity: 1} 50% {opacity: 0.2} 100% {opacity: 1}} #edUR0Ytf6yn3 {animation: edUR0Ytf6yn3_c_o 3000ms linear infinite normal forwards}@keyframes edUR0Ytf6yn3_c_o { 0% {opacity: 0.2} 50% {opacity: 1} 100% {opacity: 0.2}} #edUR0Ytf6yn4 {animation: edUR0Ytf6yn4_c_o 3000ms linear infinite normal forwards}@keyframes edUR0Ytf6yn4_c_o { 0% {opacity: 1} 50% {opacity: 0.2} 100% {opacity: 1}} #edUR0Ytf6yn5 {animation: edUR0Ytf6yn5_c_o 3000ms linear infinite normal forwards}@keyframes edUR0Ytf6yn5_c_o { 0% {opacity: 1} 50% {opacity: 0.2} 100% {opacity: 1}} #edUR0Ytf6yn6 {animation: edUR0Ytf6yn6_c_o 3000ms linear infinite normal forwards}@keyframes edUR0Ytf6yn6_c_o { 0% {opacity: 0.2} 50% {opacity: 1} 100% {opacity: 0.2}} #edUR0Ytf6yn7 {animation: edUR0Ytf6yn7_c_o 3000ms linear infinite normal forwards}@keyframes edUR0Ytf6yn7_c_o { 0% {opacity: 1} 50% {opacity: 0.2} 100% {opacity: 1}} #edUR0Ytf6yn8 {animation: edUR0Ytf6yn8_c_o 3000ms linear infinite normal forwards}@keyframes edUR0Ytf6yn8_c_o { 0% {opacity: 0.2} 50% {opacity: 1} 100% {opacity: 0.2}} #edUR0Ytf6yn9 {animation: edUR0Ytf6yn9_c_o 3000ms linear infinite normal forwards}@keyframes edUR0Ytf6yn9_c_o { 0% {opacity: 0.2} 50% {opacity: 1} 100% {opacity: 0.2}} #edUR0Ytf6yn10 {animation: edUR0Ytf6yn10_c_o 3000ms linear infinite normal forwards}@keyframes edUR0Ytf6yn10_c_o { 0% {opacity: 1} 50% {opacity: 0.2} 100% {opacity: 1}} #edUR0Ytf6yn11 {animation: edUR0Ytf6yn11_c_o 3000ms linear infinite normal forwards}@keyframes edUR0Ytf6yn11_c_o { 0% {opacity: 0.2} 50% {opacity: 1} 100% {opacity: 0.2}} #edUR0Ytf6yn12 {animation: edUR0Ytf6yn12_c_o 3000ms linear infinite normal forwards}@keyframes edUR0Ytf6yn12_c_o { 0% {opacity: 1} 50% {opacity: 0.2} 100% {opacity: 1}} #edUR0Ytf6yn13 {animation: edUR0Ytf6yn13_c_o 3000ms linear infinite normal forwards}@keyframes edUR0Ytf6yn13_c_o { 0% {opacity: 0.21} 50% {opacity: 1} 100% {opacity: 0.2}}`}
              </style>
              <path
                id="edUR0Ytf6yn2"
                d="M230.1545,535.7846c11.293,5.5562,22.5278,9.7767,33.6118,10.6172.0865,1.9372.1715,3.8627.2583,5.7707-11.0999-1.1676-22.3115-4.9283-33.5895-10.1174-.0946-2.086-.1868-4.174-.2806-6.2705"
                transform="matrix(1 0 0-1 0 841.89)"
                fill="#074ea2"
              />
              <path
                id="edUR0Ytf6yn3"
                d="M263.8894,542.0387c-10.3666-.5953-20.8741-4.3869-31.4419-9.5293-.0922-2.0758-.1866-4.1592-.2787-6.2475c10.5786,5.4,21.1011,9.508,31.4549,9.8609.0891,1.9865.1786,3.9603.2657,5.9159"
                transform="matrix(1 0 0-1 0 841.89)"
                opacity="0.2"
                fill="#f8b517"
              />
              <path
                id="edUR0Ytf6yn4"
                d="M226.9568,512.8818c13.1394,7.3074,26.2355,13.6114,39.0072,12.7358.0924,2.0506.1843,4.0855.2739,6.1098-12.788.5751-25.8628-5.3331-38.9954-12.4625-.0967-2.1266-.1908-4.2534-.2857-6.3831"
                transform="matrix(1 0 0-1 0 841.89)"
                fill="#f8b517"
              />
              <path
                id="edUR0Ytf6yn5"
                d="M267.1322,510.2104c-.0944-2.1041-.1885-4.2182-.2835-6.3425-27.9227,4.0907-57.6513-32.2356-85.5779-28.1682l1.2033,6.1376c27.6525-3.2122,57.0543,32.6832,84.6581,28.3731"
                transform="matrix(1 0 0-1 0 841.89)"
                fill="#ef4023"
              />
              <path
                id="edUR0Ytf6yn6"
                d="M272.4103,497.9047c-.0941-2.1374-.1911-4.275-.286-6.412-15.7669,6.0667-32.2537-3.975-48.6845-12.7616-16.3536-9.0156-32.652-16.7802-48.4288-12.8429l1.1951,6.0999c31.265-9.3634,65.0149,36.9311,96.2042,25.9166"
                transform="matrix(1 0 0-1 0 841.89)"
                opacity="0.2"
                fill="#ef4023"
              />
              <path
                id="edUR0Ytf6yn7"
                d="M269.4039,487.472c-.0973-2.1495-.1911-4.3021-.2883-6.4596-15.1336,3.8302-30.8702-5.7883-46.5245-13.6196-15.6138-8.1655-31.1482-14.5514-46.3204-12.7689l1.2025,6.1305c14.8405-2.2493,30.0915,4.7364,45.4037,13.0396c15.6727,8.2293,31.4087,17.8376,46.527,13.678"
                transform="matrix(1 0 0-1 0 841.89)"
                fill="#ef4023"
              />
              <path
                id="edUR0Ytf6yn8"
                d="M213.2606,437.7382c-.089-2.0021-.1786-3.996-.2676-5.9831-8.983-2.7899-17.9198-4.606-26.8642-6.503l1.093,5.5687c8.6482,1.6143,17.3217,3.7842,26.0388,6.9174"
                transform="matrix(1 0 0-1 0 841.89)"
                opacity="0.2"
                fill="#057931"
              />
              <path
                id="edUR0Ytf6yn9"
                d="M265.3614,470.5739c-14.4771,1.2869-29.4171-7.7446-44.252-14.4414-15.1792-7.3233-30.2521-12.2105-45.1017-12.1286l1.207,6.1659c14.5032-.883,29.2975,4.7214,44.1782,12.3279c14.8581,7.2158,29.8055,16.4256,44.2644,14.6891l-.2959-6.6129Z"
                transform="matrix(1 0 0-1 0 841.89)"
                opacity="0.2"
                fill="#057931"
              />
              <path
                id="edUR0Ytf6yn10"
                d="M245.1937,455.3427c-9.3191-3.3063-18.7001-8.0124-28.0326-11.6325-11.8199-4.8112-23.5627-7.88-35.2418-9.563l1.1416,5.8323c11.3649,1.2053,22.8344,4.7821,34.376,9.9428c9.3526,4.0241,18.7489,9.0851,28.0712,12.4549l-.3144-7.0345Z"
                transform="matrix(1 0 0-1 0 841.89)"
                fill="#057931"
              />
              <path
                id="edUR0Ytf6yn11"
                d="M259.9308,561.4362c-.0819-1.8176-.1633-3.6539-.2455-5.5103-8.4538-1.4015-16.9668-4.1032-25.5155-7.6365l.271,6.0848c8.5331,3.1708,17.0305,5.5355,25.49,7.062"
                transform="matrix(1 0 0-1 0 841.89)"
                opacity="0.2"
                fill="#074ea2"
              />
              <path
                id="edUR0Ytf6yn12"
                d="M245.8208,567.6282c4.0422,1.0442,8.0807,2.0018,12.1232,2.9766-.0151-1.7745-.0304-3.5668-.0462-5.377-4.1052-.8887-8.2134-1.8998-12.3225-3.0745l.2455,5.4749Z"
                transform="matrix(1 0 0-1 0 841.89)"
                fill="#074ea2"
              />
              <path
                id="edUR0Ytf6yn13"
                d="M264.0679,515.1957c-16.3737.8198-33.3207-11.2317-50.1242-20.0304l.288,6.4474c16.8035,8.8163,33.7349,20.4851,50.1118,19.7827-.089-2.0529-.1834-4.1188-.2756-6.1997"
                transform="matrix(1 0 0-1 0 841.89)"
                opacity="0.21"
                fill="#f8b517"
              />
            </svg>
            <div style={{ textAlign: 'center' }}>
              <style>
                {`
                  @keyframes loading {
                    0%, 100% { content: "Carregando"; }
                    25% { content: "Carregando."; }
                    50% { content: "Carregando.."; }
                    75% { content: "Carregando..."; }
                  }

                  .loading-text::after {
                    content: "Carregando";
                    animation: loading 1.5s infinite;
                  }
                `}
              </style>
              <div className="loading-text"></div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Dialog>
  )
}
