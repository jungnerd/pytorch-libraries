import type { CuratedLibrary } from "../lib/catalog";

export const curatedLibraries: CuratedLibrary[] = [
  {
    repo: "pytorch/pytorch",
    name: "PyTorch",
    category: "core-domain",
    description: {
      en: "Build and train models with PyTorch's core tensor and autograd APIs.",
      ko: "텐서와 autograd를 기반으로 모델을 만들고 학습하는 핵심 인터페이스를 제공합니다."
    }
  },
  {
    repo: "pytorch/vision",
    name: "TorchVision",
    category: "core-domain",
    description: {
      en: "Use ready-made datasets, transforms, and model parts for vision work.",
      ko: "이미지 데이터셋, 전처리, 비전 모델 구성 요소를 빠르게 가져다 쓸 수 있게 해줍니다."
    }
  },
  {
    repo: "pytorch/audio",
    name: "TorchAudio",
    category: "core-domain",
    description: {
      en: "Load, transform, and model audio or speech data in PyTorch.",
      ko: "오디오·음성 데이터를 불러오고 변환하며 모델링하는 흐름을 지원합니다."
    }
  },
  {
    repo: "pytorch/data",
    name: "TorchData",
    category: "core-domain",
    description: {
      en: "Compose reusable data pipelines for PyTorch training jobs.",
      ko: "학습 데이터 파이프라인을 재사용 가능한 단위로 조합하게 해줍니다."
    }
  },
  {
    repo: "pytorch/torchtitan",
    name: "TorchTitan",
    category: "training-optimization",
    description: {
      en: "Study or run reference recipes for training large generative models.",
      ko: "대규모 생성형 모델 학습 레시피와 분산 구성 예시를 제공합니다."
    }
  },
  {
    repo: "pytorch/ao",
    name: "TorchAO",
    category: "training-optimization",
    description: {
      en: "Quantize and optimize PyTorch models for faster, smaller inference.",
      ko: "PyTorch 모델을 더 작고 빠르게 만들기 위한 양자화·최적화 기능을 제공합니다."
    }
  },
  {
    repo: "pytorch/FBGEMM",
    name: "FBGEMM",
    category: "training-optimization",
    description: {
      en: "Accelerate quantized models and embedding-heavy workloads.",
      ko: "양자화 모델과 큰 임베딩 테이블을 빠르게 처리하는 저수준 커널을 제공합니다."
    }
  },
  {
    repo: "pytorch/PiPPy",
    name: "PiPPy",
    category: "training-optimization",
    description: {
      en: "Split model training into pipeline stages across devices.",
      ko: "모델 학습을 여러 장치의 파이프라인 단계로 나누어 실행하게 해줍니다."
    }
  },
  {
    repo: "pytorch/executorch",
    name: "ExecuTorch",
    category: "deployment-inference",
    description: {
      en: "Run PyTorch models directly on phones, wearables, and edge devices.",
      ko: "모바일·웨어러블·엣지 기기에서 PyTorch 모델을 직접 실행하게 해줍니다."
    }
  },
  {
    repo: "pytorch/serve",
    name: "TorchServe",
    category: "deployment-inference",
    description: {
      en: "Package PyTorch models behind production inference APIs.",
      ko: "PyTorch 모델을 추론 API로 패키징해 운영 환경에 올릴 수 있게 합니다."
    }
  },
  {
    repo: "pytorch/TensorRT",
    name: "Torch-TensorRT",
    category: "deployment-inference",
    description: {
      en: "Compile PyTorch models to run faster with NVIDIA TensorRT.",
      ko: "NVIDIA TensorRT를 활용해 PyTorch 모델 추론 속도를 끌어올립니다."
    }
  },
  {
    repo: "pytorch/xla",
    name: "PyTorch/XLA",
    category: "deployment-inference",
    description: {
      en: "Run PyTorch workloads on XLA devices such as TPUs.",
      ko: "TPU 같은 XLA 장치에서 PyTorch 학습·추론 워크로드를 실행하게 해줍니다."
    }
  },
  {
    repo: "pytorch/rl",
    name: "TorchRL",
    category: "applied-ml",
    description: {
      en: "Build reinforcement learning agents and environments in PyTorch.",
      ko: "PyTorch 기반 강화학습 에이전트와 환경 루프를 구성할 수 있게 합니다."
    }
  },
  {
    repo: "pytorch/tensordict",
    name: "TensorDict",
    category: "applied-ml",
    description: {
      en: "Pass structured batches of tensors through RL and ML pipelines.",
      ko: "여러 텐서를 묶은 배치 데이터를 구조적으로 주고받게 해줍니다."
    }
  },
  {
    repo: "pytorch/torchrec",
    name: "TorchRec",
    category: "applied-ml",
    description: {
      en: "Train and scale recommendation models with sparse features.",
      ko: "희소 특징과 임베딩이 많은 추천 모델을 학습하고 확장하는 데 초점을 둡니다."
    }
  },
  {
    repo: "pytorch/botorch",
    name: "BoTorch",
    category: "applied-ml",
    description: {
      en: "Optimize expensive experiments with Bayesian optimization.",
      ko: "비싼 실험의 하이퍼파라미터와 설계값을 베이지안 최적화로 탐색합니다."
    }
  },
  {
    repo: "pytorch/kineto",
    name: "Kineto",
    category: "developer-tools",
    description: {
      en: "Profile CPU and GPU activity to find performance bottlenecks.",
      ko: "CPU·GPU 실행 시간을 추적해 성능 병목을 찾는 데 도움을 줍니다."
    }
  },
  {
    repo: "pytorch/benchmark",
    name: "TorchBench",
    category: "developer-tools",
    description: {
      en: "Compare PyTorch performance across models, versions, and changes.",
      ko: "모델·버전·코드 변경에 따른 PyTorch 성능 차이를 비교하게 해줍니다."
    }
  }
];
