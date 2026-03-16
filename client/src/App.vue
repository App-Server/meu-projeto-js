<script setup>
import { ref, onMounted } from 'vue'

const mensagem = ref('Carregando...')

const buscarDados = async () => {
  try {
    // Graças ao proxy, o navegador entende que deve buscar no Node
    const response = await fetch('/api/dados')
    const data = await response.json()
    mensagem.value = data.mensagem
  } catch (error) {
    mensagem.value = "Erro ao conectar!"
  }
}

onMounted(buscarDados)
</script>

<template>
  <h1>Resposta do Servidor: {{ mensagem }}</h1>
</template>