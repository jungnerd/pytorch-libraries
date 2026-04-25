import type { CuratedLibrary } from "../lib/catalog";

export const curatedLibraries: CuratedLibrary[] = [
  {
    repo: "pytorch/pytorch",
    name: "PyTorch",
    category: "core-domain",
    description: {
      en: "Build and train models with PyTorch's core tensor and autograd APIs.",
      ko: "텐서와 autograd로 모델을 만들고 학습할 때 사용하는 핵심 프레임워크입니다."
    }
  },
  {
    repo: "pytorch/vision",
    name: "TorchVision",
    category: "core-domain",
    description: {
      en: "Use ready-made datasets, transforms, and model parts for vision work.",
      ko: "이미지 데이터셋, 전처리, 비전 모델 구성 요소가 필요할 때 사용하는 라이브러리입니다."
    }
  },
  {
    repo: "pytorch/audio",
    name: "TorchAudio",
    category: "core-domain",
    description: {
      en: "Load, transform, and model audio or speech data in PyTorch.",
      ko: "오디오·음성 데이터를 불러오고 변환하거나 모델링할 때 사용하는 라이브러리입니다."
    }
  },
  {
    repo: "pytorch/data",
    name: "TorchData",
    category: "core-domain",
    description: {
      en: "Compose reusable data pipelines for PyTorch training jobs.",
      ko: "학습 데이터 파이프라인을 조합 가능한 형태로 만들 때 사용하는 도구입니다."
    }
  },
  {
    repo: "pytorch/torchtitan",
    name: "TorchTitan",
    category: "training-optimization",
    description: {
      en: "Study or run reference recipes for training large generative models.",
      ko: "대규모 생성형 모델의 학습 레시피와 분산 구성을 참고할 때 사용하는 스택입니다."
    }
  },
  {
    repo: "pytorch/ao",
    name: "TorchAO",
    category: "training-optimization",
    description: {
      en: "Quantize and optimize PyTorch models for faster, smaller inference.",
      ko: "PyTorch 모델을 더 작고 빠르게 만들도록 양자화·최적화할 때 사용하는 도구입니다."
    }
  },
  {
    repo: "pytorch/FBGEMM",
    name: "FBGEMM",
    category: "training-optimization",
    description: {
      en: "Accelerate quantized models and embedding-heavy workloads.",
      ko: "양자화 모델과 큰 임베딩 테이블을 빠르게 처리할 때 사용하는 커널 라이브러리입니다."
    }
  },
  {
    repo: "pytorch/PiPPy",
    name: "PiPPy",
    category: "training-optimization",
    description: {
      en: "Split model training into pipeline stages across devices.",
      ko: "모델 학습을 여러 장치의 파이프라인 단계로 나눌 때 사용하는 도구입니다."
    }
  },
  {
    repo: "pytorch/executorch",
    name: "ExecuTorch",
    category: "deployment-inference",
    description: {
      en: "Run PyTorch models directly on phones, wearables, and edge devices.",
      ko: "모바일·웨어러블·엣지 기기에서 PyTorch 모델을 실행할 때 사용하는 런타임입니다."
    }
  },
  {
    repo: "pytorch/serve",
    name: "TorchServe",
    category: "deployment-inference",
    description: {
      en: "Package PyTorch models behind production inference APIs.",
      ko: "PyTorch 모델을 API로 서빙하고 운영 환경에 올릴 때 사용하는 도구입니다."
    }
  },
  {
    repo: "pytorch/TensorRT",
    name: "Torch-TensorRT",
    category: "deployment-inference",
    description: {
      en: "Compile PyTorch models to run faster with NVIDIA TensorRT.",
      ko: "NVIDIA TensorRT로 PyTorch 모델 추론을 더 빠르게 만들 때 사용하는 컴파일러 통합입니다."
    }
  },
  {
    repo: "pytorch/xla",
    name: "PyTorch/XLA",
    category: "deployment-inference",
    description: {
      en: "Run PyTorch workloads on XLA devices such as TPUs.",
      ko: "TPU 같은 XLA 장치에서 PyTorch 학습·추론을 실행할 때 사용하는 통합입니다."
    }
  },
  {
    repo: "pytorch/rl",
    name: "TorchRL",
    category: "applied-ml",
    description: {
      en: "Build reinforcement learning agents and environments in PyTorch.",
      ko: "PyTorch로 강화학습 에이전트와 환경 루프를 만들 때 사용하는 라이브러리입니다."
    }
  },
  {
    repo: "pytorch/tensordict",
    name: "TensorDict",
    category: "applied-ml",
    description: {
      en: "Pass structured batches of tensors through RL and ML pipelines.",
      ko: "여러 텐서를 묶은 배치 데이터를 구조적으로 주고받을 때 사용하는 컨테이너입니다."
    }
  },
  {
    repo: "pytorch/torchrec",
    name: "TorchRec",
    category: "applied-ml",
    description: {
      en: "Train and scale recommendation models with sparse features.",
      ko: "희소 특징과 임베딩이 많은 추천 모델을 학습·확장할 때 사용하는 라이브러리입니다."
    }
  },
  {
    repo: "pytorch/botorch",
    name: "BoTorch",
    category: "applied-ml",
    description: {
      en: "Optimize expensive experiments with Bayesian optimization.",
      ko: "비싼 실험의 하이퍼파라미터나 설계값을 효율적으로 찾을 때 사용하는 라이브러리입니다."
    }
  },
  {
    repo: "pytorch/kineto",
    name: "Kineto",
    category: "developer-tools",
    description: {
      en: "Profile CPU and GPU activity to find performance bottlenecks.",
      ko: "CPU·GPU 실행 시간을 추적해 성능 병목을 찾을 때 사용하는 프로파일러입니다."
    }
  },
  {
    repo: "pytorch/benchmark",
    name: "TorchBench",
    category: "developer-tools",
    description: {
      en: "Compare PyTorch performance across models, versions, and changes.",
      ko: "모델·버전·코드 변경에 따른 PyTorch 성능 차이를 비교할 때 사용하는 벤치마크입니다."
    }
  }
];
