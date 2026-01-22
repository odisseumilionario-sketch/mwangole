import React from 'react';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
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
            <img alt="Palanca Negra" class="w-16 h-16 mx-auto mt-4" src="https://horizons-cdn.hostinger.com/43619163-4fd6-4960-ba57-04c4420f1730/chatgpt-image-16_11_2025-02_40_52-JhlHE.png" />
        </div>
    </PageWrapper>;
export default FinalPage;