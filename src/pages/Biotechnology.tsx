
import AreaPageHeader from "@/components/AreaPageHeader";

const Biotechnology = () => {
  const areaInfo = {
    id: 1, 
    title: "生物科技",
    description: "生物技术的最新研究与应用",
    icon: "bio",
    path: "/biotechnology"
  };

  return (
    <div className="min-h-screen bg-white">
      <AreaPageHeader 
        title="生物科技" 
        areaId={areaInfo.id} 
        areaInfo={areaInfo} 
      />
      
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">生物科技概述</h2>
        <p className="mb-4">
          生物科技是利用生物系统、生物体或其衍生物来开发或制造产品或技术流程的学科。它结合了生物学、化学、物理学、工程学和信息技术等多个领域的知识。
        </p>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">研究领域</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>基因编辑与基因治疗</li>
          <li>合成生物学</li>
          <li>生物信息学</li>
          <li>生物制药</li>
          <li>农业生物技术</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3">应用前景</h3>
        <p className="mb-4">
          生物科技在医疗健康、农业、环境保护和工业生产等领域有着广泛的应用。例如，在医疗领域，生物科技可用于开发新的疫苗、药物和诊断技术；在农业领域，生物科技可用于改良作物品种、提高产量和抗病性；在环境保护领域，生物科技可用于生物修复和可持续能源生产。
        </p>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">最新研究进展</h3>
        <p className="mb-4">
          近年来，生物科技领域取得了许多突破性进展，特别是在CRISPR基因编辑、mRNA技术、单细胞测序等方面。这些技术为疾病治疗、个性化医疗、农业创新等提供了新的可能性。
        </p>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">挑战与机遇</h3>
        <p className="mb-4">
          生物科技的发展面临着技术、伦理、监管等多方面的挑战。同时，随着对生命科学认识的不断深入和技术手段的不断进步，生物科技也迎来了前所未有的发展机遇，有望为人类健康、环境可持续性和经济增长做出更大贡献。
        </p>
      </div>
    </div>
  );
};

export default Biotechnology;
