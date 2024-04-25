import Timeline from './components/Timeline';
import FormDetalhe from './components/Form/Form';
import { useParams } from 'react-router-dom';
import { useBussiness } from '@/hook/useBussiness';

const DetailPage = () => {
  const { leadId } = useParams();
  const { bussiness } = useBussiness(Number(leadId));

  return (
    <div className='w-screen bg-white'>

      <div className='grid lg:grid-cols-[1fr_33vw] md:grid-cols-1 '>
        {/** Timeline */}
        <div className='min-h-screen bg-indigo-50 border-t-2 border-indigo-200'>
          <Timeline />
        </div>
        {/** Formulário de Detalhes */}
        <div className='min-h-screen bg-white border-t-2 border-indigo-200'>
          { bussiness && <FormDetalhe bussiness={bussiness}/> }
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
