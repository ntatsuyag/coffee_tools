import { useCallback, useMemo, useState } from 'react'

type UseWaterCalculationParams = {
  /** 初期のコーヒー豆量 (g) */
  initialCoffeeGram?: number
  /** 初期の抽出比率 (1:n) */
  initialRatio?: number
}

type UseWaterCalculationResult = {
  coffeeGram: number
  ratio: number
  totalWater: number
  handleCoffeeChange: (value: number | string) => void
  handlePresetSelect: (value: number) => void
  handleRatioChange: (value: number) => void
}

const parseNumber = (value: number | string): number => {
  if (typeof value === 'number') return value
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : 0
}

export const useWaterCalculation = ({
  initialCoffeeGram = 0,
  initialRatio = 15,
}: UseWaterCalculationParams = {}): UseWaterCalculationResult => {
  const [coffeeGram, setCoffeeGram] = useState(initialCoffeeGram)
  const [ratio, setRatio] = useState(initialRatio)

  const handleCoffeeChange = useCallback((value: number | string) => {
    const parsed = parseNumber(value)
    setCoffeeGram(Math.max(0, parsed))
  }, [])

  const handlePresetSelect = useCallback((value: number) => {
    setCoffeeGram(value >= 0 ? value : 0)
  }, [])

  const handleRatioChange = useCallback((value: number) => {
    if (!Number.isFinite(value)) return
    const rounded = Math.max(1, Math.round(value))
    setRatio(rounded)
  }, [])

  const totalWater = useMemo(() => coffeeGram * ratio, [coffeeGram, ratio])

  return {
    coffeeGram,
    ratio,
    totalWater,
    handleCoffeeChange,
    handlePresetSelect,
    handleRatioChange,
  }
}
