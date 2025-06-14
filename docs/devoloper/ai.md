# AI Module

## Overview

The AI module manages MLflow, Kubeflow, Weights & Biases, DVC, Optuna, TensorFlow, Core ML, and MiniCPM.

## Integration

- **MLflow**: Manages model lifecycle.
- **Kubeflow**: Runs training pipelines.
- **APIs**: `/ai/adjust-model`, `/ai/monitor-model`, `/ai/train`.

## Usage

- Adjust model: Call `/ai/adjust-model` with params.
- Train model: Call `/ai/train` with dataset.
