import { Film } from '../models/Film';

export const films: Film[] = [
  {
    title: 'XCL Pro',
    description:
      "'XCL Pro is our latest window film and is a hybrid, multi-layered film offering 1.5 mil 2 ply and 1.5 mil 3 ply for the 5% VLT. XCL Pro has superior longevity over traditional dyed and dyed/metal products, offers low reflectivity and increased IR rejection, and has a proprietary construction that won't interfere with satellite and radio reception.'",
    brand: 'Max Pro Films',
    vlts:['50%','45%','40%','35%','30%'],
    features: [
      {
        title: 'Ceramic Particle Technology',
        description:
          "'PRIME XR contains ceramic particles that filter out the sun's infrared radiation — making them more effective than traditional metallized or dyed films.'",
        icon: 'gateway',
      },
      {
        title: 'Superior Heat Rejection',
        description:
          "'Our multilayer nano-ceramic particle technology blocks up to 98% of the infrared heat.'",
        icon: 'fall',
      },
      {
        title: 'UV Ray Protection',
        description:
          "'PRIME XR PLUS provides SPF 1,000 protection that effectively blocks over 99% of harmful UV rays that can lead to numerous skin cancers, premature aging and skin cell damage.'",
        icon: 'safety',
      },
      {
        title: 'Greater Clarity',
        description:
          "'In the past, keeping cool meant choosing a darker shade of tint. The multi-layer nano construction in PRIME XR PLUS provides ultra-high performance without reducing outbound visibility.'",
        icon: 'eye',
      },
      {
        title: 'Crystal Clear Signal',
        description:
          "'PRIME XR contains ceramic particles that filter out the sun's infrared radiation — making them more effective than traditional metallized or dyed films.'",
        icon: 'wifi',
      },
    ],
    variants: [
      {
        name: 'XCL PRO 50%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '50%',
        irRejection: '40%',
        glareReduction: '42%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        visibleLightRefclectivity: '8%',
        uvRejection: '99%',
        solarEnergyRejection: '38%',
        solarEnergyReflected: '8.6%',
        warranty: 'Lifetime',
      },
      {
        name: 'XCL PRO 45%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '45%',
        irRejection: '43%',
        glareReduction: '49%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        visibleLightRefclectivity: '8%',
        uvRejection: '99%',
        solarEnergyRejection: '40%',
        solarEnergyReflected: '8.8%',
        warranty: 'Lifetime',
      },
      {
        name: 'XCL PRO 40%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '42%',
        irRejection: '43%',
        glareReduction: '52%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        visibleLightRefclectivity: '8%',
        uvRejection: '99%',
        solarEnergyRejection: '41%',
        solarEnergyReflected: '8.8%',
        warranty: 'Lifetime',
      },
      {
        name: 'XCL PRO 35%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '35%',
        irRejection: '50%',
        glareReduction: '60%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        visibleLightRefclectivity: '8%',
        uvRejection: '99%',
        solarEnergyRejection: '46%',
        solarEnergyReflected: '9.9%',
        warranty: 'Lifetime',
      },
      {
        name: 'XCL PRO 30%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '35%',
        irRejection: '50%',
        glareReduction: '62%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        visibleLightRefclectivity: '8%',
        uvRejection: '99%',
        solarEnergyRejection: '47%',
        solarEnergyReflected: '9.6%',
        warranty: 'Lifetime',
      },
      {
        name: 'XCL PRO 25%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '32%',
        irRejection: '50%',
        glareReduction: '64%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        visibleLightRefclectivity: '8%',
        uvRejection: '99%',
        solarEnergyRejection: '47%',
        solarEnergyReflected: '9.3%',
        warranty: 'Lifetime',
      },
      {
        name: 'XCL PRO 20%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '25%',
        irRejection: '50%',
        glareReduction: '72%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        visibleLightRefclectivity: '7%',
        uvRejection: '99%',
        solarEnergyRejection: '51%',
        solarEnergyReflected: '9.8%',
        warranty: 'Lifetime',
      },
      {
        name: 'XCL PRO 15%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '15%',
        irRejection: '50%',
        glareReduction: '83%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        visibleLightRefclectivity: '7%',
        uvRejection: '99%',
        solarEnergyRejection: '54%',
        solarEnergyReflected: '9.1%',
        warranty: 'Lifetime',
      },
      {
        name: 'XCL PRO 5%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '5.5%',
        irRejection: '65%',
        glareReduction: '94%',
        ply: '3PLY',
        thinckness: '1.5MIL',
        visibleLightRefclectivity: '7%',
        uvRejection: '99%',
        solarEnergyRejection: '61%',
        solarEnergyReflected: '10.1%',
        warranty: 'Lifetime',
      },
    ],
  },
  {
    brand: 'Max Pro Films',
    title: 'MCIR MaxCool IR',
    description: "'MaxCool IR is a nano ceramic window film that provides higher heat rejection and infrared rejection (IR) than standard dyed or metalized window film. MaxCool IR is engineered to keep the car feeling cooler due to a higher rejection of total solar energy and protect the interior from UVA and UVB rays.'",
    vlts: ['80%','70%','50%','40%','35%','20%','15%','5%'],
    features:[],
    variants:[
      {
        name:'MCIR MaxCool IR 80%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '75%',
        glareReduction: '27%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '44%',
        solarEnergyReflected: '8%',
        irRejection: '82%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'MCIR MaxCool IR 70%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '76%',
        glareReduction: '34%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '35%',
        solarEnergyReflected: '6%',
        irRejection: '53%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'MCIR MaxCool IR 50%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '51%',
        glareReduction: '45%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '41%',
        solarEnergyReflected: '6%',
        irRejection: '61%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'MCIR MaxCool IR 40%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '42%',
        glareReduction: '51%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '44%',
        solarEnergyReflected: '6%',
        irRejection: '63%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'MCIR MaxCool IR 35%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '35%',
        glareReduction: '60%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '46%',
        solarEnergyReflected: '6%',
        irRejection: '63%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'MCIR MaxCool IR 20%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '20%',
        glareReduction: '76%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '51%',
        solarEnergyReflected: '6%',
        irRejection: '71%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'MCIR MaxCool IR 15%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '15%',
        glareReduction: '72%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '52%',
        solarEnergyReflected: '6%',
        irRejection: '74%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'MCIR MaxCool IR 5%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '5%',
        glareReduction: '93%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '58%',
        solarEnergyReflected: '5%',
        irRejection: '80%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      }
    ]
  },
  {
    brand: 'Max Pro Films',
    title: 'MCPX MaxPro Carbon Xtreme',
    description:
      "'MPCX is a color stable, non fading, metal free product that offers high heat rejection and Infrared (IR) rejection to keep you cool and will not interfere with satellite reception.'",
    vlts: ['50%','40%','35%','20%','15%','5%'],
    features:[],
    variants:[
      {
        name:'MCPX MaxPro Carbon Xtreme 50%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '50%',
        glareReduction: '44%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '35%',
        solarEnergyReflected: '6%',
        irRejection: '43%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'MCPX MaxPro Carbon Xtreme 40%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '40%',
        glareReduction: '50%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '36%',
        solarEnergyReflected: '6%',
        irRejection: '51%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'MCPX MaxPro Carbon Xtreme 35%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '20%',
        glareReduction: '68%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '42%',
        solarEnergyReflected: '6%',
        irRejection: '51%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'MCPX MaxPro Carbon Xtreme 20%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '20%',
        glareReduction: '68%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '48%',
        solarEnergyReflected: '5%',
        irRejection: '60%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'MCPX MaxPro Carbon Xtreme 15%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '15%',
        glareReduction: '84%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '52%',
        solarEnergyReflected: '5%',
        irRejection: '64%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'MCPX MaxPro Carbon Xtreme 5%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '5%',
        glareReduction: '93%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '61%',
        solarEnergyReflected: '5%',
        irRejection: '70%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
    ]
  },
  {
    brand: 'Max Pro Films',
    title: 'MJPHP MaxJet High Performance',
    description:
      "'Our high performance line is all about keeping cool and looking cool. Made with a metallized layer, MJPHP rejects and reflects more solar energy, is available in darker VLTs, and has an attractive – and slightly reflective – colored appearance.'",
    vlts: ['35%','20%','15%','5%'],
    features:[],
    variants:[
      {
        name:'MJPHP MaxJet High Performance 35%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '35%',
        glareReduction: '57%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '42%',
        solarEnergyReflected: '6%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'MJPHP MaxJet High Performance 20%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '20%',
        glareReduction: '76%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '46%',
        solarEnergyReflected: '6%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'MJPHP MaxJet High Performance 15%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '15%',
        glareReduction: '82%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '53%',
        solarEnergyReflected: '6%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'MJPHP MaxJet High Performance 5%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '5%',
        glareReduction: '95%',
        ply: '3PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '58%',
        solarEnergyReflected: '6%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
    ]
  },
  {
    brand: 'Max Pro Films',
    title: 'MJP MaxJet Pro',
    description:
      "'MaxJet Pro film is made from advanced laminated film that is scratch resistant, non-reflective, and supremely easy to apply and shrink. Color stable dyes give true color and non-metal construction provides enhanced UV protection.'",
    vlts: ['50%','45%','40%','35%','20%','15%','5%'],
    features:[],
    variants:[
      {
        name:'MJP MaxJet Pro 50%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '50%',
        glareReduction: '45%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '28%',
        solarEnergyReflected: '6%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'MJP MaxJet Pro 45%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '45%',
        glareReduction: '50%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '28%',
        solarEnergyReflected: '6%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'MJP MaxJet Pro  40%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '40%',
        glareReduction: '52%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '30%',
        solarEnergyReflected: '6%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'MJP MaxJet Pro 35%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '35%',
        glareReduction: '55%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '32%',
        solarEnergyReflected: '6%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'MJP MaxJet Pro 20%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '20%',
        glareReduction: '76%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '36%',
        solarEnergyReflected: '6%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'MJP MaxJet Pro 15%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '15%',
        glareReduction: '83%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '39%',
        solarEnergyReflected: '6%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'MJP MaxJet Pro 5%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '5%',
        glareReduction: '92%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '42%',
        solarEnergyReflected: '5%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
    ]
  },
  {
    brand: 'Max Pro Films',
    title: 'PRO CP Charcoal Plus',
    description:
      "'Maxpro CP film is made from advanced laminated film that is scratch resistant, non-reflective, and supremely easy to apply and shrink. Color stable dyes give true color and non-metal construction provides enhanced UV protection.'",
    vlts: ['65%','50%','45%','38%','33%','18%','5%'],
    features:[],
    variants:[
      {
        name:'PRO CP Charcoal Plus 65%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '65%',
        glareReduction: '38%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '25%',
        solarEnergyReflected: '6%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'PRO CP Charcoal Plus 50%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '50%',
        glareReduction: '45%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '28%',
        solarEnergyReflected: '6%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'PRO CP Charcoal Plus  45%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '45%',
        glareReduction: '50%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '28%',
        solarEnergyReflected: '6%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'PRO CP Charcoal Plus 38%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '38%',
        glareReduction: '52%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '30%',
        solarEnergyReflected: '6%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'PRO CP Charcoal Plus 33%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '33%',
        glareReduction: '58%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '31%',
        solarEnergyReflected: '6%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'PRO CP Charcoal Plus 28%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '28%',
        glareReduction: '67%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '31%',
        solarEnergyReflected: '6%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'PRO CP Charcoal Plus 18%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '18%',
        glareReduction: '74%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '36%',
        solarEnergyReflected: '6%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'PRO CP Charcoal Plus 5%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '5%',
        glareReduction: '92%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '42%',
        solarEnergyReflected: '6%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
    ]
  },
  {
    brand: 'Max Pro Films',
    title: 'PRO HP Pro High Performance',
    description:
      "'Our high performance line is all about keeping cool and looking cool. Made with a metallized layer, HP rejects and reflects more solar energy, is available in darker VLTs, and has an attractive – and slightly reflective – colored appearance.'",
    vlts: ['48%','38%','28%','18%','12%','5%','3%'],
    features:[],
    variants:[
      {
        name:'PRO HP Pro High Performance 48%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '48%',
        glareReduction: '51%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '39%',
        solarEnergyReflected: '9%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'PRO HP Pro High Performance 38%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '38%',
        glareReduction: '58%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '43%',
        solarEnergyReflected: '8%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'PRO HP Pro High Performance 28%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '28%',
        glareReduction: '63%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '44%',
        solarEnergyReflected: '7%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'PRO HP Pro High Performance 18%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '18%',
        glareReduction: '76%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '46%',
        solarEnergyReflected: '7%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'PRO HP Pro High Performance 12%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '12%',
        glareReduction: '84%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '53%',
        solarEnergyReflected: '6%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'PRO HP Pro High Performance 5%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '5%',
        glareReduction: '95%',
        ply: '3PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '58%',
        solarEnergyReflected: '6%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
      {
        name:'PRO HP Pro High Performance 3%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '3%',
        glareReduction: '96%',
        ply: '3PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '59%',
        solarEnergyReflected: '6%',
        uvRejection:'99%',
        warranty: 'Lifetime'
      },
    ]
  },
  {
    brand: 'Max Pro Films',
    title: 'XTRA Performance',
    description:
      "'Maxpro XP film offers high quality and good protection. With a true charcoal dyed non metal construction this product protects against heat, glare and offers UV protection.'",
    vlts: ['50%','45%','40%','35%','20%','15%','5%'],
    features:[],
    variants:[
      {
        name:'XTRA Performance 50%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '50%',
        glareReduction: '45%',
        ply: '1PLY',
        thinckness: '1MIL',
        solarEnergyRejection: '28%',
        solarEnergyReflected: '5%',
        uvRejection:'99%',
        warranty: '3 Year Limited'
      },
      {
        name:'XTRA Performance 45%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '45%',
        glareReduction: '47%',
        ply: '1PLY',
        thinckness: '1MIL',
        solarEnergyRejection: '28%',
        solarEnergyReflected: '5%',
        uvRejection:'99%',
        warranty: '3 Year Limited'
      },
      {
        name:'XTRA Performance 40%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '40%',
        glareReduction: '52%',
        ply: '1PLY',
        thinckness: '1MIL',
        solarEnergyRejection: '30%',
        solarEnergyReflected: '5%',
        uvRejection:'99%',
        warranty: '3 Year Limited'
      },
      {
        name:'XTRA Performance 35%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '35%',
        glareReduction: '55%',
        ply: '1PLY',
        thinckness: '1MIL',
        solarEnergyRejection: '32%',
        solarEnergyReflected: '5%',
        uvRejection:'99%',
        warranty: '3 Year Limited'
      },
      {
        name:'XTRA Performance 20%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '20%',
        glareReduction: '76%',
        ply: '1PLY',
        thinckness: '1MIL',
        solarEnergyRejection: '36%',
        solarEnergyReflected: '5%',
        uvRejection:'99%',
        warranty: '3 Year Limited'
      },
      {
        name:'XTRA Performance 15%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '15%',
        glareReduction: '83%',
        ply: '1PLY',
        thinckness: '1MIL',
        solarEnergyRejection: '39%',
        solarEnergyReflected: '5%',
        uvRejection:'99%',
        warranty: '3 Year Limited'
      },
      {
        name:'XTRA Performance 5%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '5%',
        glareReduction: '92%',
        ply: '1PLY',
        thinckness: '1MIL',
        solarEnergyRejection: '42%',
        solarEnergyReflected: '5%',
        uvRejection:'99%',
        warranty: '3 Year Limited'
      },
    ]
  },
  {
    brand: 'Max Pro Films',
    title: 'XTRA PRO Performance',
    description:
      "'Maxpro XPP film offers high quality and good protection. With a true charcoal dyed non metal construction this product protects against heat, glare and offers UV protection.'",
    vlts: ['50%','45%','40%','35%','20%','15%','5%'],
    features:[],
    variants:[
      {
        name:'XTRA Performance 50%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '50%',
        glareReduction: '45%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '28%',
        solarEnergyReflected: '5%',
        uvRejection:'99%',
        warranty: '3 Year Limited'
      },
      {
        name:'XTRA Performance 45%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '45%',
        glareReduction: '47%',
        ply: '2PLY',
        thinckness: '1MIL',
        solarEnergyRejection: '28%',
        solarEnergyReflected: '5%',
        uvRejection:'99%',
        warranty: '3 Year Limited'
      },
      {
        name:'XTRA Performance 40%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '40%',
        glareReduction: '52%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '30%',
        solarEnergyReflected: '5%',
        uvRejection:'99%',
        warranty: '3 Year Limited'
      },
      {
        name:'XTRA Performance 35%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '35%',
        glareReduction: '55%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '32%',
        solarEnergyReflected: '5%',
        uvRejection:'99%',
        warranty: '3 Year Limited'
      },
      {
        name:'XTRA Performance 20%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '20%',
        glareReduction: '76%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '36%',
        solarEnergyReflected: '5%',
        uvRejection:'99%',
        warranty: '3 Year Limited'
      },
      {
        name:'XTRA Performance 15%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '15%',
        glareReduction: '83%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '39%',
        solarEnergyReflected: '5%',
        uvRejection:'99%',
        warranty: '3 Year Limited'
      },
      {
        name:'XTRA Performance 5%',
        scratchResistantCoating: 'Yes',
        visibleLightTransmission: '5%',
        glareReduction: '92%',
        ply: '2PLY',
        thinckness: '1.5MIL',
        solarEnergyRejection: '42%',
        solarEnergyReflected: '5%',
        uvRejection:'99%',
        warranty: '3 Year Limited'
      },
    ]
  },
];
