#!/bin/bash
# Script to install MiniCPM (2.4B)
set -e

# Logging
LOG_FILE="install_minicpm.log"
echo "Starting MiniCPM installation" > $LOG_FILE

# Install dependencies
echo "Installing Python and pip" >> $LOG_FILE
sudo apt-get update
sudo apt-get install -y python3.8 python3-pip >> $LOG_FILE 2>&1

# Install libraries
echo "Installing transformers, torch, bitsandbytes" >> $LOG_FILE
pip3 install transformers torch bitsandbytes >> $LOG_FILE 2>&1

# Download MiniCPM
echo "Downloading MiniCPM from Hugging Face" >> $LOG_FILE
git clone https://huggingface.co/minicpm/minicpm-2.4b >> $LOG_FILE 2>&1

# Configure quantization
echo "Configuring quantization (int8)" >> $LOG_FILE
echo "export QUANTIZATION=int8" >> ~/.bashrc
source ~/.bashrc

# Run inference server
echo "Starting MiniCPM inference server on port 8001" >> $LOG_FILE
nohup python3 -m transformers.serve minicpm-2.4b --port 8001 --quantize int8 >> $LOG_FILE 2>&1 &

# Verify
echo "Verifying installation" >> $LOG_FILE
curl -X POST http://localhost:8001/inference -d '{"text": "Test"}' >> $LOG_FILE 2>&1

echo "MiniCPM installation completed" >> $LOG_FILE