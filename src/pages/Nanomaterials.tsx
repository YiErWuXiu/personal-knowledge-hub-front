
import AreaPageHeader from "@/components/AreaPageHeader";

const Nanomaterials = () => {
  const areaInfo = {
    id: 1,
    title: "纳米材料",
    description: "纳米材料的研究进展与应用前景",
    icon: "nano",
    path: "/nanomaterials"
  };

  return (
    <div className="min-h-screen bg-white">
      <AreaPageHeader 
        title="纳米材料" 
        areaId={areaInfo.id} 
        areaInfo={areaInfo} 
      />
      
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">纳米材料概述</h2>
        <p className="mb-4">
          纳米材料是指至少在一维空间上尺寸为1-100纳米范围内的材料。由于尺寸效应和表面效应，纳米材料展现出许多独特的物理、化学和生物学特性。
        </p>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">研究领域</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>纳米颗粒与纳米复合材料</li>
          <li>碳纳米管与石墨烯</li>
          <li>纳米生物材料</li>
          <li>纳米催化剂</li>
          <li>纳米电子材料</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3">应用前景</h3>
        <p className="mb-4">
          纳米材料在医疗、电子、能源、环保等领域有着广泛的应用前景。例如，在医疗领域，纳米材料可用于靶向药物递送、生物成像和疾病诊断。在电子领域，纳米材料可用于开发更小、更快、更节能的电子设备。
        </p>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">最新研究进展</h3>
        <p className="mb-4">
          近年来，纳米材料的研究取得了许多重要进展，包括新型纳米材料的合成方法、纳米材料的表征技术以及纳米材料在各个领域的应用。特别是在能源存储和转换、环境修复、生物医学等方面，纳米材料展现出了巨大的潜力。
        </p>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">挑战与机遇</h3>
        <p className="mb-4">
          尽管纳米材料有着广泛的应用前景，但其发展仍面临许多挑战，如大规模生产、成本控制、安全性评估等。同时，纳米材料的研究也带来了许多新的机遇，为材料科学、物理学、化学、生物学等领域的交叉融合提供了新的平台。
        </p>
      </div>
    </div>
  );
};

export default Nanomaterials;
