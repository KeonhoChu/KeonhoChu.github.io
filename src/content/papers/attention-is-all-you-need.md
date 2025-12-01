---
title: "Attention Is All You Need Review"
date: "2024-03-20"
tags: ["NLP", "Transformer", "Deep Learning"]
summary: "The paper that introduced the Transformer architecture, revolutionizing NLP by relying entirely on attention mechanisms."
---

# Attention Is All You Need

**Authors**: Ashish Vaswani et al. (Google Brain)

## Abstract
The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the **Transformer**, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.

## Key Concepts

### 1. Self-Attention
Self-attention, sometimes called intra-attention, is an attention mechanism relating different positions of a single sequence in order to compute a representation of the sequence.

### 2. Multi-Head Attention
Instead of performing a single attention function with $d_{model}$-dimensional keys, values and queries, we found it beneficial to linearly project the queries, keys and values $h$ times with different, learned linear projections to $d_k$, $d_k$ and $d_v$ dimensions, respectively.

## Architecture
The Transformer follows this overall architecture using stacked self-attention and point-wise, fully connected layers for both the encoder and decoder.

> "The Transformer is the first transduction model relying entirely on self-attention to compute representations of its input and output without using sequence-aligned RNNs or convolution."

## Conclusion
In this work, we presented the Transformer, the first sequence transduction model based entirely on attention, replacing the recurrent layers most commonly used in encoder-decoder architectures with multi-headed self-attention.

## Personal Thoughts
This paper is foundational for modern LLMs like GPT and BERT. The shift from RNNs to Attention allowed for massive parallelization, which is the key to training on internet-scale data.
